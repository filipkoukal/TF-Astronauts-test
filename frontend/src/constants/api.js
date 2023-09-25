// app server routes
const backend_address = process.env.VUE_APP_BACKEND_ADR
const backend_port = process.env.VUE_APP_BACKEND_PORT
const prefix = "http://" + backend_address + ":" + backend_port + "/data/"

export const GET_ASTRONAUTS = prefix + "astronauts"
export const CREATE_ASTRONAUT = prefix + "create_astronaut"
export const EDIT_ASTRONAUT =  prefix + "edit_astronaut/"
export const DELETE_ASTRONAUT = prefix + "delete_astronaut/"
export const CONNECTION_TEST_MAIN = prefix + "test"