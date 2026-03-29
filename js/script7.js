            (async () => {
                try {
                    const res = await fetch('/auth/token', { credentials: 'include' });
                    if (res.ok) {
                        const { accessToken } = await res.json();
                        if (accessToken) {
                            localStorage.setItem('discordAccessToken', accessToken);

                            try { window.discordAccessToken = accessToken; } catch (e) { /* noop */ }
                            try {
                                window.dispatchEvent(new CustomEvent('discordTokenUpdated', { detail: { accessToken } }));
                            } catch (e) { /* noop */ }
                        }
                    } else {
                        localStorage.removeItem('discordAccessToken');
                        try { window.discordAccessToken = ''; } catch (e) { /* noop */ }
                        try { window.dispatchEvent(new CustomEvent('discordTokenUpdated', { detail: { accessToken: null } })); } catch (e) { /* noop */ }
                    }
                } catch (_) {

                }
            })();