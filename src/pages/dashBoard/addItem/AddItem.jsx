import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_image_upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("Posting new menu", data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu has been added !",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss || Add Items</title>
      </Helmet>
      <SectionTitle subHeading={"What's New"} heading={"Add an Item"} />

      <div className="grid justify-center w-full bg-[#F3F3F3] rounded-md md:py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-slate-400">
                Recipe Name <sup>*</sup>
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id=""
              placeholder="Recipe name..."
              className="input input-bordered h-8"
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-600 text-xs mt-1">
                Recipe name is required!
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="col-span-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-400">
                    Category <sup>*</sup>
                  </span>
                </label>
                <select
                  defaultValue="Pick One"
                  {...register("category", { required: true })}
                  name="category"
                  id=""
                  className="input input-bordered h-8"
                >
                  <option disabled>Pick One</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Soup">Soup</option>
                  <option value="Salad">Salad</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Deshi">Deshi</option>
                  <option value="Drinks">Drinks</option>
                </select>
                {errors.category?.type === "required" && (
                  <p role="alert" className="text-red-600 text-xs mt-1">
                    Category is required!
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-400">
                    Price <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  id=""
                  min={1}
                  placeholder="Recipe price..."
                  className="input input-bordered h-8"
                />
                {errors.price?.type === "required" && (
                  <p role="alert" className="text-red-600 text-xs mt-1">
                    Price is required!
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-slate-400">
                Recipe Details <sup>*</sup>
              </span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              name="recipe"
              id=""
              cols="80"
              rows="20"
              placeholder="Recipe details..."
              className="input input-bordered h-24"
            ></textarea>
            {errors.details?.type === "required" && (
              <p role="alert" className="text-red-600 text-xs mt-1">
                Recipe details is required!
              </p>
            )}
          </div>

          <div className="form-control w-full my-4">
            <input
              type="file"
              name=""
              id=""
              {...register("image", { required: true })}
            />
            {errors.file?.type === "required" && (
              <p role="alert" className="text-red-600 text-xs mt-1">
                Image is required!
              </p>
            )}
          </div>
          <div className="form-control w-full my-4">
            <button type="submit" className="btn rounded-md bg-[#876024]">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
