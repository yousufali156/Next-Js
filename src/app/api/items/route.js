export async function GET () {
    const data = {
        message: "Successfully Get Data",
        error: false,
        status: 200
    }
    return Response.json({data})
}
