import { ParsedUrlQuery } from "querystring"

const prettyPrint = ( contextElement:ParsedUrlQuery | unknown | undefined ):string => {

  let pretty =JSON.stringify(contextElement);
  if (contextElement && pretty.length>2) {
    pretty = JSON.stringify(contextElement);
  }
  else {
    pretty = '-';
  }
  return pretty
}

export {prettyPrint};