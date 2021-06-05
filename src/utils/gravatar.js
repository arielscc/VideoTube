import md5 from 'md5';

export const gravatar = (email) => {
  const emailTrim = email.trim().toLocaleLowerCase();
  const hash = md5(emailTrim);
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};
