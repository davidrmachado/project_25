const RETURN_OK = {
    LOGIN: {
        status: 200,
        message: {
            id: 3,
            name: "Cliente Zé Birita",
            email: "zebirita@email.com",
            role: "customer",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjFjMzc0NjZjMTU5NzU1Y2UxZmExODFiZDI0N2NiOTI1Iiwicm9sZSI6ImN1c3RvbWVyIn0sIl9wcmV2aW91c0RhdGFWYWx1ZXMiOnsiaWQiOjMsIm5hbWUiOiJDbGllbnRlIFrDqSBCaXJpdGEiLCJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMWMzNzQ2NmMxNTk3NTVjZTFmYTE4MWJkMjQ3Y2I5MjUiLCJyb2xlIjoiY3VzdG9tZXIifSwidW5pcW5vIjoxLCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSJdfSwiaXNOZXdSZWNvcmQiOmZhbHNlLCJpYXQiOjE2NzQ1MjY4ODIsImV4cCI6MTY3NDYxMzI4Mn0.RyR-l_MOeMVwpPXynkK5Oi_mlFyqf4sbO4e2wa-y_eU"
        },
    },
    REGISTER: {
        dataValues: {
          id: 7,
          name: 'Gabriel Barbosa',
          email: 'gabigol@email.com',
          password: '4b057ee530b87c294f69a5fbb6b9cd9a',
          role: 'customer'
        }          
    },
    REGISTER_INFO: {
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        password: "$#zebirita#$",
    },
    REGISTER_RESPONSE: { status: 201, message: "Created" },
}

module.exports = RETURN_OK;
