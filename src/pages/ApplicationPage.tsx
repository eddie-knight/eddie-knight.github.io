import React, { useEffect, useRef } from "react";

// TypeScript declaration for HubSpot forms
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}

export const ApplicationPage: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formInitializedRef = useRef(false);
  const observerRef = useRef<MutationObserver | null>(null);

  // Function to move misplaced HubSpot forms to the correct container
  const moveFormToContainer = () => {
    if (!formContainerRef.current) return;

    // Look for HubSpot forms that might have been rendered outside the container
    const allForms = document.querySelectorAll('.hs-form, [class*="hs-form"]');
    allForms.forEach((form) => {
      const formElement = form as HTMLElement;
      // Check if form is not already in our container
      if (!formContainerRef.current?.contains(formElement)) {
        // Check if it's a HubSpot form (has hs-form classes or is near body)
        const isHubSpotForm = formElement.classList.contains('hs-form') || 
                            formElement.querySelector('.hs-form') !== null ||
                            (formElement.parentElement === document.body || 
                             formElement.parentElement?.tagName === 'BODY');
        
        if (isHubSpotForm) {
          // Move the form to our container
          formContainerRef.current.appendChild(formElement);
        }
      }
    });
  };

  const initializeForm = () => {
    // Ensure container exists and form hasn't been initialized yet
    if (!formContainerRef.current || formInitializedRef.current) {
      return;
    }

    // Wait a tick to ensure DOM is ready
    const tryInitialize = () => {
      if (window.hbspt && formContainerRef.current && !formInitializedRef.current) {
        try {
          // Clear any existing content in the container
          formContainerRef.current.innerHTML = "";
          
          // Use CSS selector string instead of DOM element reference
          window.hbspt.forms.create({
            portalId: "243073831",
            formId: "bde4b609-d6ab-45e2-8609-e71cf60b48f7",
            region: "na2",
            target: "#hubspot-form-container"
          });
          
          formInitializedRef.current = true;

          // Set up a check to move form if it appears elsewhere
          setTimeout(() => {
            moveFormToContainer();
          }, 500);
        } catch (error) {
          console.error("Error initializing HubSpot form:", error);
        }
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(tryInitialize);
    });
  };

  useEffect(() => {
    // Ensure container ref is set before proceeding
    if (!formContainerRef.current) {
      return;
    }

    // Set up MutationObserver to detect when form is added to DOM
    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            // Check if this is a HubSpot form element
            if (element.classList.contains('hs-form') || 
                element.querySelector('.hs-form') !== null ||
                element.querySelector('[class*="hs-"]') !== null) {
              // Form detected, try to move it to container
              moveFormToContainer();
            }
          }
        });
      });
    });

    // Start observing the document body for form additions
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Check if HubSpot script is already loaded
    if (window.hbspt) {
      initializeForm();
    } else {
      // Load HubSpot forms script
      const script = document.createElement("script");
      script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;

      script.onload = () => {
        // Small delay to ensure script is fully initialized
        setTimeout(() => {
          initializeForm();
        }, 100);
      };

      script.onerror = () => {
        console.error("Failed to load HubSpot forms script");
      };

      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      formInitializedRef.current = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      // Remove script if component unmounts (optional cleanup)
      const existingScript = document.querySelector(
        'script[src="//js-na2.hsforms.net/forms/embed/v2.js"]'
      );
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Header Section */}
      <section
        id="header"
        style={{
          marginBottom: "var(--gf-space-xl)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-accent)",
            lineHeight: 1.2
          }}
        >
          Strategic Advisory Services
        </h1>
        <p
          style={{
            color: "var(--gf-color-text-subtle)",
            fontSize: "1.25rem",
            lineHeight: 1.7,
            maxWidth: "800px",
            margin: "10 auto"
          }}
        >
          I maintain a selective engagement model, accepting only one to two advisory engagements at a time to ensure dedicated focus and maximum strategic impact.
          Please provide a brief overview of your current situation to assist me in determining how I can best help.
        </p>
      </section>

      {/* Form Section */}
      <section
        id="application-form"
        style={{
          padding: "var(--gf-space-xl)",
          backgroundColor: "var(--gf-color-surface)",
          borderRadius: "var(--gf-radius-xl)",
          boxShadow: "var(--gf-shadow-surface)",
          backdropFilter: "var(--gf-glass-blur)",
          WebkitBackdropFilter: "var(--gf-glass-blur)",
          border: "1px solid var(--gf-color-border-strong)"
        }}
      >
        <div 
          ref={formContainerRef} 
          id="hubspot-form-container"
          style={{
            minHeight: "200px",
            width: "100%",
            position: "relative"
          }}
        ></div>
      </section>
    </div>
  );
};

