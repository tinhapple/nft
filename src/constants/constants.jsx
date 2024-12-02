export const EMAIL_REGEX = /^([a-zA-Z0-9])+(([a-zA-Z0-9_.-])*)+([a-zA-Z0-9])@(([a-zA-Z0-9-])+([a-zA-Z0-9])+\.)([a-zA-Z]{2,})((\.+([a-zA-Z]{2,}))*)$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
export const PHONE_REGEX = /^(0|84|\+84|084)\d{9}$/;
export const LINK_REGEX = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
export const KEY_REGEX = /_/g;
export const CONVERT_UPPERCASE_REGEX = /\b\w/g;
export const URL_REGEX = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const DATE_FORMAT = 'DD-MM-YYYY';


