import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import type { Declaration } from "@/types_data/Declaration";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Profile } from "@/types_data/Profile";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { create } from "@/services";
import Declarations from "@/components/Declarations/Declarations";
import { toast } from "react-toastify";

const TEXT_FIELD_REQUIRED_MESSAGE='Ce champ est requis'
const schema = yup
  .object({
      status: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE).default('NEW'),
      registered: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE).default(new Date().toISOString().slice(0, 10)),
      child:yup
  .object({
     gender: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     firstName: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     lastName: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     birthDate: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     birthDateTime: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
  }),
     firstParent:yup
  .object({
     gender: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     firstName: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     lastName: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     email: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     phone: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE)
  }),
     secondParent:yup
  .object({
     gender: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     firstName: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     lastName: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     email: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     phone: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE)
  }),
    company:yup
  .object({
     name: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE),
     address: yup.string().required(TEXT_FIELD_REQUIRED_MESSAGE)
      }),
 
  })
  .required()

function CreateDeclarationPage() {
  
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Declaration>({
    resolver: yupResolver(schema),
  })
const navigation=useNavigate()

  const onSubmit: SubmitHandler<Declaration> = async (data) => {
    try {
        const response= await  create("declarations",data);
        if (!response.ok) {
      throw new Error("Échec de l'enregistrement");
    }

    // Succès - redirection ou message
    toast.success("Déclaration enregistrée avec succès !");
    navigation("/private/declaration"); // si tu veux rediriger

   const {status}=response;
   console.log(status)
    } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    toast.error("Une erreur est survenue !");
    }
   
  }

//   const navigate = useNavigate();
//   const [form, setForm] = useState<Omit<Declaration, "id">>(initialValues);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");

//   const updateField = (key: string, value: string) => {
//     setForm((prev) => ({ ...prev, [key]: value } as typeof prev));
//   };

//   const updateProfileField = (
//     group: "child" | "firstParent" | "secondParent",
//     key: keyof Declaration["child"],
//     value: string,
//   ) => {
//     setForm((prev) => ({
//       ...prev,
//       [group]: {
//         ...prev[group],
//         [key]: value,
//       },
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setError("");

//     const payload: Declaration = {
//       ...form,
//       id: Date.now(),
//     };

//     try {
//       const response = await fetch("http://localhost:8080/declarations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error("Échec de l'enregistrement");
//       }

//       navigate("/private/declaration");
//     } catch (submissionError) {
//       setError(
//         submissionError instanceof Error
//           ? submissionError.message
//           : "Erreur inattendue",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-2xl font-bold">
        Ajouter une nouvelle déclaration
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <section className="rounded-lg border p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold">Enfant</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              Civilité
            <select  className="select" defaultValue="M" {...register("child.gender")}>
            <option value={""}>Selectionner</option>
              <option value="M">Monsieur</option>
              <option value="Me">Madame</option>
              <option value="Ms">Mademoiselle</option>
            </select>
            <span className="text-error">
                {errors.child?.gender?.message}
              </span>
             </label>
            <label className="flex flex-col gap-2">
              Prénom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Prenom de l'enfant"
                {...register("child.firstName")}
              />
              <span className="text-error">
                {errors.child?.firstName?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Nom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Nom de l'enfant"
                {...register("child.lastName")}
              />
              <span className="text-error">
                {errors.child?.lastName?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Date de naissance
              <input
                type="date"
                className="input input-bordered"
                {...register("child.birthDate")}
              />
              <span className="text-error">
                {errors.child?.birthDate?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Heure de naissance
              <input
                type="time"
                className="input input-bordered"
                {...register("child.birthDateTime")}
              />
              <span className="text-error">
                {errors.child?.birthDateTime?.message}
              </span>
            </label>
         <label className="flex flex-col gap-2">
              Nom Hopital de naissance
              <input
                type="text"
                className="input input-bordered"
                placeholder="Nom Hopital"
                {...register("company.name")}
              />
              <span className="text-error">
                {errors.company?.name?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Adresse Hopital de naissance
              <input
                type="text"
                className="input input-bordered"
                placeholder="Adresse Hopital"
                {...register("company.address")}
              />
              <span className="text-error">
                {errors.company?.address?.message}
              </span>
            </label>
          </div>
          
        </section>
        {/* FIRST PARENT */}
        <section className="rounded-lg border p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold">PARENT 1</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              Civilité 
            <select  className="select" defaultValue="M" {...register("firstParent.gender")}>
            <option value={""}>Selectionner</option>
              <option value="M">Monsieur</option>
              <option value="Me">Madame</option>
              <option value="Ms">Mademoiselle</option>
            </select>
            <span className="text-error">
                {errors.firstParent?.gender?.message}
              </span>
             </label>
            <label className="flex flex-col gap-2">
              Prénom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Prenom du premier parent"
                {...register("firstParent.firstName")}
              />
              <span className="text-error">
                {errors.firstParent?.firstName?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Nom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Nom du premier parent"
                {...register("firstParent.lastName")}
              />
              <span className="text-error">
                {errors.firstParent?.lastName?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Telephone
              <input
                type="text"
                className="input input-bordered"
                placeholder="Telephone du premier parent"

                {...register("firstParent.phone")}
              />
              <span className="text-error">
                {errors.firstParent?.phone?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                className="input input-bordered"
                placeholder="Email du premier parent"

                {...register("firstParent.email")}
              />
              <span className="text-error">
                {errors.firstParent?.email?.message}
              </span>
            </label>
          </div>
          
        </section>

        {/* SECOND PARENT */}
        <section className="rounded-lg border p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold">PARENT 2</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              Civilité
            <select  className="select" defaultValue="M" {...register("secondParent.gender")}>
            <option value={""}>Selectionner</option>
              <option value="M">Monsieur</option>
              <option value="Me">Madame</option>
              <option value="Ms">Mademoiselle</option>
            </select>
            <span className="text-error">
                {errors.secondParent?.gender?.message}
              </span>
             </label>
            <label className="flex flex-col gap-2">
              Prénom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Prenom du deuxième parent"
                {...register("secondParent.firstName")}
              />
              <span className="text-error">
                {errors.secondParent?.firstName?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Nom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Nom du deuxième parent"
                {...register("secondParent.lastName")}
              />
              <span className="text-error">
                {errors.secondParent?.lastName?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Telephone
              <input
                type="text"
                className="input input-bordered"
                placeholder="Telephone du deuxième parent"

                {...register("secondParent.phone")}
              />
              <span className="text-error">
                {errors.secondParent?.phone?.message}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                className="input input-bordered"
                {...register("secondParent.email")}
                 placeholder="Email du deuxième parent"

              />
              <span className="text-error">
                {errors.secondParent?.email?.message}
              </span>
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full p-3 mt-3">
            Enregistrer
          </button>
          <pre>{JSON.stringify(errors)}</pre>
        </section>
      </form>

    </div>
  );
}

export default CreateDeclarationPage;
