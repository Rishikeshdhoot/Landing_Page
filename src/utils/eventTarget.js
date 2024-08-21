const eventDispatcher = new EventTarget();

export const openServiceIsSuccessModal = ({
  type,
  header = "mohit",
  slogan,
}) => {
  const data = { type, header, slogan };
  //   debugger;
  const event = new CustomEvent("openModal", { detail: data });
  eventDispatcher.dispatchEvent(event);
};

export const closeServiceIsSuccessModal = () => {
  eventDispatcher.dispatchEvent(new Event("closeModal"));
};
