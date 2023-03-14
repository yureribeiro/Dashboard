const validateEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
}

const validatePassword = (password) => {
  return password?.toString().length > 6
}


const validateName = (name) => {
  return name?.toString().length > 2
}

export {
  validateEmail,
  validatePassword,
  validateName,
}