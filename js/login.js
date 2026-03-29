    function createPageUrl(pageName) {
      // Example: convert "Terminal" to a URL path
      return pageName.toLowerCase() + '.html';
    }

    function handleAccess() {
      const url = createPageUrl("Terminal");
      window.location.href = url;
    }