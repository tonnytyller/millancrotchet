const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const { repo } = event.queryStringParameters;
    const [owner, repoName] = repo.split('/');
    
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/issues`,
      {
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch issues' })
      };
    }
    
    const issues = await response.json();
    
    // Filter and format issues as comments
    const comments = issues
      .filter(issue => issue.state === 'open')
      .map(issue => ({
        id: issue.id,
        user: {
          login: issue.user.login,
          avatar: issue.user.avatar_url
        },
        body: issue.body,
        created_at: issue.created_at,
        reactions: issue.reactions
      }));
    
    return {
      statusCode: 200,
      body: JSON.stringify(comments)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
