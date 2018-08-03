import path from 'path'
import theo from 'theo'
import { theo as UItheo } from '@uiengine/core'

const filePath = path.resolve(__dirname, 'color.json')

const titleize = string => string.replace(/^color/, '').replace(/([A-Z\d]+)/g, ' $1').replace(/^./, str => str.toUpperCase())
const variablize = string => `$${string.replace(/([a-z])([A-Z\d]+)/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()}`
const modify = prop => {
  const { name, reference } = prop
  prop.name = titleize(name)
  prop.variable = variablize(name)
  if (reference) prop.reference = titleize(reference)
  return prop
}

module.exports = UItheo(theo).convert(filePath, modify)
