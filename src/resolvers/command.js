module.exports = {
  type: 'command',
  resolve: (content, args, msg, { commands }) => {
    const command = commands.get(content.toLowerCase())
    return !command ||
    ((command.options || {}).adminOnly && !process.env.ADMIN_IDS.split(', ').includes(msg.author.id))
    ? Promise.reject('command.NOT_FOUND')
    : Promise.resolve(command)
  }
}
