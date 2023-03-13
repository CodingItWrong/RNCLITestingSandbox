const api = {
  async get(path) {
    switch (path) {
      case 'restaurants':
        return {
          data: [
            {
              id: 1,
              name: 'Burger Place',
            },
          ],
        };
      default:
        throw new Error(`unmocked path: ${path}`);
    }
  },
};

export default api;
