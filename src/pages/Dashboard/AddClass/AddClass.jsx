import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
      const formData = new FormData();
      formData.append('image', data.image[0])
      fetch(img_hosting_url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, instructor, photo, email, price, seat} = data;
            const newItem = {name, instructor, photo, email, price: parseFloat(price), seat: parseInt(seat), enroll:0, status:'pending', image:imgURL}
            console.log(newItem);
            axiosSecure.post("/classes", newItem)
            .then(data => {
                console.log('after posting new class item', data.data)
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Class added successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                }
            })
        }
      })
    };
    
  return (
    <div className="w-full px-10">
      <Helmet>
        <title>DesignTechIT - Add Class</title>
      </Helmet>

      <SectionTitle
        heading={"Add a Class"}
        subHeading={"Instructor Dashboard"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            {...register("instructor", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">
              Instructor Photo URL*
            </span>
          </label>
          <input
            type="text"
            placeholder="Instructor Photo URL"
            {...register("photo", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Email"
            {...register("email", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <input
              type="number"
              {...register("seat", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <input className="btn btn-md mt-4 mb-10" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
