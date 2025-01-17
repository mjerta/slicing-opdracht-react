function formatPhoneNumber(number) {
  return number.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
}

export default formatPhoneNumber;