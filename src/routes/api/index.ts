// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ params }) {
  return {
    status: 200,
    body: { params }
  }
}