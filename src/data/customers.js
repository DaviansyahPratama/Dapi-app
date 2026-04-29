const customers = Array.from({ length: 30 }, (_, i) => ({
    id: `CUST-${1000 + i}`,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@mail.com`,
    phone: `08123${100000 + i}`,
    loyalty: ["Bronze", "Silver", "Gold"][i % 3]
}));

export default customers;