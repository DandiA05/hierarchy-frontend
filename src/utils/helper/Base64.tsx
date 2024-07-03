const Base64 = (file: any) => {
  return new Promise((resolve, reject) => {
    let dataBase64 = ''
    let baseURL = ''
    // Make new FileReader
    const reader = new FileReader()

    // Convert the file to base64 text
    reader.readAsDataURL(file)

    // on reader load somthing...
    reader.onload = () => {
      baseURL = reader.result as string
      //   if only need get data
      dataBase64 = baseURL.split(',')[1]
      return resolve(dataBase64)
    }

    reader.onerror = reject
  })
}

export default Base64
