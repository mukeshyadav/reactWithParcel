const API = '//localhost:3001'

const getShipments = params => {
  return fetch(`${API}/shipments`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

const updateShipment = params => {
  return fetch(`${API}/shipments/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export { getShipments, updateShipment }
