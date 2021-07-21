// const unique = (value, index, self) => {
//     return self.indexOf(value) === index
//   }
  
//   const transport_types = ['train', 'aeroplane', 'car', 'ferry']
//   const unique_transport_types = transport_types.filter(unique)
  
//   console.log(unique_transport_types)

  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const transport_types = [26, 27, 26, 26, 28, 28, 29, 29, 30]
  const uniqueTransports = transport_types.filter(unique)
  
  console.log(uniqueTransports)