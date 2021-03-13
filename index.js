var fs = require("fs")
const Ajv = require("ajv").default
const ajv = new Ajv({
  allErrors: true,
  required: true,
  coerceTypes: true,
  additionalProperties: false
})

let commonSchema = require("./schema/common")
const commonValidate = ajv.compile(commonSchema)

let data = require("./locales/en/common.json")

if (!commonValidate(data)) {
  console.error(commonValidate.errors)
  throw Error("common.json validation failed.")
} else {
  console.info("Validation success!")
}
