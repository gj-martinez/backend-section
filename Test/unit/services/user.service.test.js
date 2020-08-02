const {UserService} = require('../../../src/services');
const {UserRepositoyMock} = require('../../mocks');
const {UserModelMock :{user, users}} = require('../../mocks');


describe("User services Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should find a user by id", async () => {
        const UserRepository = UserRepositoyMock;
        UserRepository.get.mockReturnValue(user);

        const _userService = new UserService({UserRepository})
        const expected = await _userService.get(user._id);

        expect(expected).toMatchObject(user);
    });

    it("Should find a user by username", async () => {
        const UserRepository = UserRepositoyMock;
        UserRepository.getUserByUsername.mockReturnValue(user);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.getUserByUsername(user.username);

        expect(expected).toMatchObject(user);
    });

    it("Should find user collect", async () => {
        const UserRepository = UserRepositoyMock;
        UserRepository.getAll.mockReturnValue(users);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.getAll();

        expect(expected).toMatchObject(users);
    });

    it("Should update user by id", async () => {
        const UserRepository = UserRepositoyMock;
        UserRepository.update.mockReturnValue(user);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.update(user._id, user);

        expect(expected).toMatchObject(user);
    });

    it("Should delete user by id", async () => {
        const UserRepository = UserRepositoyMock;
        UserRepository.delete.mockReturnValue(true);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.delete(user._id);

        expect(expected).toEqual(true);
    });

});