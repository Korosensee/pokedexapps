import type { APIRoute } from "astro";
import { deletePokemon } from "../../../services/pokemon";

export const DELETE: APIRoute = async (context) => {
  const id = context.params.id!     //[id].json.ts esta seteado asi para establecerse como parámetros
  await deletePokemon(parseInt(id))
  return new Response(JSON.stringify({}), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}