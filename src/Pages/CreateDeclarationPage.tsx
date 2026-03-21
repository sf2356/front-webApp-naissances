import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Declaration } from "@/types_data/Declaration";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Profile } from "@/types_data/Profile";

const initialValues: Omit<Declaration, "id"> = {
  picture: "",
  comment: "",
  status: "en_attente",
  registered: new Date().toISOString().slice(0, 10),
  child: {
    gender: "",
    firstName: "",
    lastName: "",
    birthDate: "",
  },
  firstParent: {
    gender: "",
    firstName: "",
    lastName: "",
    birthDate: "",
  },
  secondParent: {
    gender: "",
    firstName: "",
    lastName: "",
    birthDate: "",
  },
  email: "",
  phone: "",
  company: {
    name: "",
    address: "",
  },
};

function CreateDeclarationPage() {
  
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Profile>()
  const onSubmit: SubmitHandler<Profile> = (data) => console.log(data)

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
              Prénom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Prenom de l'enfant"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span className="text-error">This field is required</span>}
            </label>
            <label className="flex flex-col gap-2">
              Nom
              <input
                type="text"
                className="input input-bordered"
                placeholder="Nom de l'enfant"
               {...register("lastName", { required: true })}
              />
              {errors.lastName && <span className="text-error">This field is required</span>}
            </label>
            <label className="flex flex-col gap-2">
              Date de naissance
              <input
                type="date"
                className="input input-bordered"
                {...register("birthDate", { required: true })}
              />
              {errors.birthDate && <span className="text-error">This field is required</span>}
            </label>
            <label className="flex flex-col gap-2">
              Heure de naissance
              <input
                type="time"
                className="input input-bordered"
                {...register("birthDateTime", { required: true })}
              />
              {errors.birthDateTime && <span className="text-error">This field is required</span>}
            </label>
          </div>
          <button type="submit"
            className="btn btn-primary w-full p-3 mt-3">Enregistrer</button>
        </section>

        
      </form>
    </div>
  );
}

export default CreateDeclarationPage;
