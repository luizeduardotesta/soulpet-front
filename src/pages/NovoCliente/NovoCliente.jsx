import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function NovoCliente() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
        axios.post("http://localhost:3001/clientes", data)
            .then(response => {
                toast.success("Cliente cadastrado.", { position: "bottom-left", duration: 2000 });
                navigate("/clientes");
            })
            .catch(error => {
                toast.error("Algo deu errado.", { position: "bottom-left", duration: 2000 });
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h1>Novo Cliente</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" className={errors.nome && "is-invalid"} {...register("nome", { required: "O nome é obrigatório", maxLength: { value: 130, message: "Limite de 130 letras" } })} />
                    {errors.nome && <Form.Text className="invalid-feedback">{errors.nome.message}</Form.Text>}

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" className={errors.email && "is-invalid"} {...register("email", { required: "O email é obrigatório", maxLength: { value: 255, message: "Limite de 255 letras" } })} />
                    {errors.email && <Form.Text className="invalid-feedback">{errors.email.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" className={errors.telefone && "is-invalid"} {...register("telefone", { required: "O telefone é obrigatório", maxLength: { value: 255, message: "Limite de 255 letras" } })} />
                    {errors.telefone && <Form.Text className="invalid-feedback">{errors.telefone.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" className={errors.endereco?.cidade && "is-invalid"} {...register("endereco.cidade", { required: "A cidade é obrigatória", maxLength: { value: 255, message: "Limite de 255 letras" } })} />
                    {errors.endereco?.cidade && <Form.Text className="invalid-feedback">{errors.endereco.cidade.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>UF</Form.Label>
                    <Form.Control type="text" className={errors.endereco?.uf && "is-invalid"} {...register("endereco.uf", { required: "O Estado é obrigatório", maxLength: { value: 2, message: "Limite de 2 letras" } })} />
                    {errors.endereco?.uf && <Form.Text className="invalid-feedback">{errors.endereco.uf.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" className={errors.endereco?.cep && "is-invalid"} {...register("endereco.cep", { required: "O CEP é obrigatório", maxLength: { value: 9, message: "Limite de 9 números" } })} />
                    {errors.endereco?.cep && <Form.Text className="invalid-feedback">{errors.endereco.cep.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control type="text" className={errors.endereco?.rua && "is-invalid"} {...register("endereco.rua", { required: "A rua é obrigatória", maxLength: { value: 255, message: "Limite de 255 letras" } })} />
                    {errors.endereco?.rua && <Form.Text className="invalid-feedback">{errors.endereco.rua.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="text" className={errors.endereco?.numero && "is-invalid"} {...register("endereco.numero", { required: "A numero é obrigatória", maxLength: { value: 255, message: "Limite de 255 números" } })} />
                    {errors.endereco?.numero && <Form.Text className="invalid-feedback">{errors.endereco.numero.message}</Form.Text>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}