const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const { name, email, comment, repo } = JSON.parse(event.body);
    
    const [owner, repoName] = repo.split('/');
    
    // Create issue title with timestamp
    const title = `Comment from ${name} - ${new Date().toISOString()}`;
    
    // Format the issue body
    const body = `**Name:** ${name}\n**Email:** ${email || 'Not provided'}\n\n**Comment:**\n${comment}`;
    
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/issues`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body,
          labels: ['comment']
        })
      }
    );
    
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to create issue' })
      };
    }
    
    const issue = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        id: issue.id,
        url: issue.html_url
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
