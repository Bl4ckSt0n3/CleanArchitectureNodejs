const CreateUserDto = require('../dtos/requests/create/createUserDto');

module.exports = (request, userRepository) => {

    return userRepository.create(
        new CreateUserDto(
            request.id,
            request.firstName,
            request.lastName,
            request.email,
            request.password
        )
    );
};