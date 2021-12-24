import { ParsedUrlQuery } from "querystring"

const prettyPrint = ( contextElement:ParsedUrlQuery | unknown | undefined ):string => {

  let pretty
  if (contextElement) {
    pretty = JSON.stringify(contextElement);
  }
  else {
    pretty = '-';
  }
  return pretty
}

export {prettyPrint};