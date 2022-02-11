
const deleteUserDto = require('../dtos/requests/delete/deleteUserDto');

module.exports = (request, userRepository) => {
    return userRepository.delete(
        new deleteUserDto(
            request.email,
            request.password,
            request.username
        )
    );
}