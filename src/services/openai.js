// Replace direct OpenAI SDK usage with a service that calls your API
const openaiService = {
  chat: {
    completions: {
      create: async ({ messages, model = "gpt-3.5-turbo" }) => {
        try {
          const response = await fetch("/api/openai", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages,
              model,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "OpenAI request failed");
          }

          return await response.json();
        } catch (error) {
          console.error("Error calling OpenAI API:", error);
          throw error;
        }
      },
    },
  },
};

export default openaiService;
