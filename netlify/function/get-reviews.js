// netlify/functions/get-reviews.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const repoOwner = 'your-github-username';
    const repoName = 'your-repo-name';
    const token = process.env.GITHUB_TOKEN;
    
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/issues`,
      {
        headers: {
          'Authorization': `token ${token}`,
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
    
    // Filter and format issues as reviews
    const reviews = issues
      .filter(issue => issue.title.startsWith('Review:'))
      .map(issue => {
        const body = issue.body;
        // Parse the body to extract review data
        // This depends on how you format the issue body
        
        return {
          id: issue.id,
          name: issue.user.login,
          rating: 5, // Extract from body
          comment: body, // Or extract the comment part
          date: issue.created_at
        };
      });
    
    return {
      statusCode: 200,
      body: JSON.stringify(reviews)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
