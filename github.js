/**
 * JS file defining Github class
 */
class Github {
  constructor() {
    this.client_id = "6a42f53666620f225479";
    this.client_secret = "42692fe70fbd7cd67e21837d4a7d95b65cfa4e96";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, // same as profile: profile
      repos
    };
  }
}

// INFO We need:
// https://api.github.com/users/rashmibal
// https://api.github.com/users/rashmibal/repos
