const schema = {
  type: "object",
  $id: "common",
  additionalProperties: false,
  required: ["labels","buttons","errorMessages"],
  properties: {
    "labels": {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        "username": {type: "string"},
        "password": {type: "string"},
        "email": {type: "string"},
        "confirmpassword": {type: "string"},
        "on": {type: "string"},
        "off": {type: "string"}
      }
    },
    "buttons": {
      type: "object",
      additionalProperties: false,
      required: ["submit"],
      properties: {
        "submit": {type: "string"}
      }
    },
    "errorMessages": {
      type: "object",
      required: ["webGLNotSupported"],
      properties: {
        "webGLNotSupported": {type: "string"}
      }
    }
  }
}
module.exports = schema
