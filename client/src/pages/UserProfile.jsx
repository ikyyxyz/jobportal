import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest, handleFileUpload } from "../utils";
import { Login } from "../redux/userSlice";
import { SkillForm } from "../components/SkillForm";
import { PersonalForm } from "../components/PersonalForm";
import { ExperienceForm } from "../components/ExperienceForm";
import { EducationForm } from "../components/EducationForm";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const userInfo = user;

  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState("");
  const [uploadCv, setUploadCv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [educationData, setEducationData] = useState(user?.education || []);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingEducationData, setEditingEducationData] = useState(null);

  const [description, setDescription] = useState(
    user?.description || "No Description"
  );
  const [eduDescription, setEduDescription] = useState(
    user?.eduDescription || "No Description"
  );

  const formatDate = (dateString) => {
    if (!dateString) return "No Date";

    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const [errMsg, setErrMsg] = useState({ status: false });
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrMsg(null);
    const uri = profileImage && (await handleFileUpload(profileImage));
    const newData = uri ? { ...data, profileUrl: uri } : data;
    try {
      const res = await apiRequest({
        url: "/users/update-user",
        token: user?.token,
        data: newData,
        method: "PUT",
      });
      setIsSubmitting(false);
      if (res.status === "failed") {
        setErrMsg({ ...res });
      } else {
        setErrMsg({ status: "success", message: res.message });
        const newData = { token: res?.token, ...res?.user };
        dispatch(Login(newData));
        localStorage.setItem("userInfo", JSON.stringify(data));
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  const [editingPersonal, setEditingPersonal] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [editingEducation, setEditingEducation] = useState(false);
  const [editingSkills, setEditingSkills] = useState(false);

  const [addingExperience, setAddingExperience] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setEditingPersonal(false);
    setEditingExperience(false);
    setEditingEducation(false);
    setEditingSkills(false);
  };

  const handleEditPersonal = () => {
    setEditingPersonal(true);
    setOpen(true);
  };

  const handleEditExperience = () => {
    setEditingExperience(true);
    setOpen(true);
  };

  const handleEditEducation = () => {
    setEditingEducation(true);
    setOpen(true);
  };

  const handleEditSkills = () => {
    setEditingSkills(true);
    setOpen(true);
  };

  const handleAddExperience = () => {
    setAddingExperience(true);
    setOpen(true);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    setEducationData(updatedEducationData);
  };

  const isEditingEducation = typeof editingEducationIndex === "number";
  const educationToEdit = isEditingEducation
    ? educationData[editingEducationIndex]
    : null;

  const onSubmitEducation = (data) => {
    if (isEditingEducation) {
      const updatedEducationData = [...educationData];
      updatedEducationData[editingEducationIndex] = data;
      setEducationData(updatedEducationData);
    } else {
      setEducationData([...educationData, data]);
    }

    setEduDescription(data.eduDescription || "No Description");

    setEditingEducationData(null);
    setEditingEducationIndex(null);
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { ...userInfo },
  });

  return (
    <div className="container mx-auto flex flex-col gap-1 items-center justify-center py-10">
      {/* Personal */}
      <PersonalForm
        editingPersonal={editingPersonal}
        handleEditPersonal={handleEditPersonal}
        userInfo={userInfo}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        open={open}
      />

      {/* experience */}

      <ExperienceForm
        editingExperience={editingExperience}
        handleAddExperience={handleAddExperience}
        handleEditExperience={handleEditExperience}
        userInfo={userInfo}
        formatDate={formatDate}
        description={description}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        open={open}
      />

      {/* Education */}
      <EducationForm
        onSubmitEducation={onSubmitEducation}
        editingEducation={editingEducation}
        handleEditEducation={handleEditEducation}
        eduDescription={eduDescription}
        userInfo={userInfo}
        formatDate={formatDate}
        handleDeleteEducation={handleDeleteEducation}
        onSubmit={onSubmit}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        open={open}
      />

      {/* Skills */}
      <SkillForm
        editingSkills={editingSkills}
        handleEditSkills={handleEditSkills}
        userInfo={userInfo}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        open={open}
      />
    </div>
  );
};

export default UserProfile;
