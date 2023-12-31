module.exports = {
    testEnvironment: 'node',
    verbose: true,
    transform: {
        "^.+\\.js$": 'babel-jest'
    },
    transformIgnorePatterns: ["node_modules/?!(@jest)"]
}