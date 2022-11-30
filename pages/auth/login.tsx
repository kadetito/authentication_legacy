import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

import { useForm } from "react-hook-form";
import { signIn, getSession, getProviders } from "next-auth/react";
import { AuthLayout } from "../../layouts";
import { validations } from "../../utils";
import { useRouter } from "next/router";
import {
  Badge,
  Form,
  Button,
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  // const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showError, setShowError] = useState(false);

  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);

  const onLoginUser = async ({ email, password }: FormData) => {
    setShowError(false);
    await signIn("credentials", { email, password });
  };

  //****************** remove autocomplete on focus (readonly) */
  const [attribute, setAttribute] = useState(true);

  return (
    <AuthLayout
      title="page.auth.head.title"
      description="page.auth.head.meta.description"
    >
      <Container>
        <Row>
          <Col>
            <Badge bg="danger" className={showError ? "d-inline" : "d-none"}>
              Danger
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md={6} lg={4}>
            <Card className="p-5">
              <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicEmail"
                >
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    onFocus={() => setAttribute(false)}
                    readOnly={attribute}
                    placeholder="Enter e-mail"
                    style={{
                      backgroundColor: !!errors.email ? "red" : "white",
                    }}
                    {...register("email", {
                      required: "campor requerido",
                      validate: validations.isEmail,
                    })}
                  />
                  <Form.Text className="text-muted">
                    {!!errors.email ? errors.email?.message : ""}
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onFocus={() => setAttribute(false)}
                    readOnly={attribute}
                    placeholder="Introduzca el password"
                    style={{
                      backgroundColor: !!errors.password ? "red" : "white",
                    }}
                    {...register("password", {
                      required: "campo requerido",
                      minLength: {
                        value: 6,
                        message: "debe tener al menos 8 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-muted">
                    {!!errors.password ? errors.password?.message : ""}
                  </Form.Text>
                </Form.Group>
                <Row>
                  <Col className="d-grid gap-2">
                    <Button type="submit" variant="primary" color="primary">
                      Identificacion
                    </Button>
                  </Col>
                </Row>
              </form>

              <Row>
                <Col className="d-grid gap-2">
                  <hr />
                  {Object.values(providers).map((provider: any) => {
                    if (provider.id === "credentials")
                      return <div key="credentials"></div>;

                    return (
                      <Button
                        key={provider.id}
                        variant="outline-dark"
                        onClick={() => signIn(provider.id)}
                      >
                        {provider.name}
                      </Button>
                    );
                  })}
                </Col>
              </Row>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });

  const { p = "/" } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
