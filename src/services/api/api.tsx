import satellite from '@services/satellite'

export const GetListNegaras = async () => {
  try {
    const response = await satellite.get('/negaras')
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}

export const GetListPelabuhans = async (id: number) => {
  try {
    const response = await satellite.get(`/pelabuhans/`, {
      params: {
        filter: `{"where" : {"id_negara":${id}}}`,
      },
    })
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}

export const GetListBarangs = async (id: number) => {
  try {
    const response = await satellite.get(`/barangs/`, {
      params: {
        filter: `{"where" : {"id_pelabuhan":${id}}}`,
      },
    })
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}
