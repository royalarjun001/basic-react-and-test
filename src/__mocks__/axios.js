const axiosMock = {
    get: jest.fn().mockResolvedValue({ data: { stores: [] } })
};
export default axiosMock;