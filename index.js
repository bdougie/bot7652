/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')


  app.on('issues.labeled', async context => {
    const issueNumber = context.payload.issue.number
    const params = context.repo({
      number: issueNumber,
      body: "Hey I am a bot and saw you added a label, do you need help?"
    })
    context.github.issues.createComment(params)
  })
}
