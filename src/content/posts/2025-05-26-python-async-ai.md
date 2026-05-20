---
title: "Asynchronous Programming for AI Engineers"
pubDatetime: 2025-05-26T00:00:00Z
description: "A practical, hands-on guide to Python asynchronous programming for AI engineers who want to build faster and more responsive applications."
tags: [Python]
featured: false
draft: false
---

A practical, hands-on guide to Python asynchronous programming for AI engineers who want to build faster and more responsive applications.

## Why Should AI Engineers Care About Async? 

When you call LLM APIs or other external services, your code spends most of its time **waiting** for responses. Without async, your app is forced to do all the tasks in sequence. It sits there slow, unresponsive, and frustrating for users. Asynchronous programming enables your app work on parallel tasks, and respond to other user requests while waiting. 

## Async in Python: The Basics

Python's `asyncio` module is your toolkit for writing concurrent code. Here's what you need to know:

- Use `async def` to define a coroutine (an async function).
- Use `await` to pause and yield control back to the event loop while waiting for something (like an API call).
- Only use `await` with coroutines or "awaitable" objects.

**Example:**

```python
import asyncio

async def say_hello():
    await asyncio.sleep(1)
    print("Hello, async world!")

asyncio.run(say_hello())
```

## Controlling Concurrency: Don't Overwhelm the API!

When making lots of API calls, you need to **limit concurrency** to avoid hitting rate limits or overloading servers. Use `asyncio.Semaphore` to control how many requests run at once.

```python
import asyncio
from openai import AsyncOpenAI

async def generate_text(prompt, client, semaphore):
    async with semaphore:
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content

async def main():
    prompts = [f"Tell me a fact about number {i}" for i in range(100)]
    semaphore = asyncio.Semaphore(5)  # Limit to 5 concurrent requests

    async with AsyncOpenAI() as client:
        tasks = [generate_text(prompt, client, semaphore) for prompt in prompts]
        results = await asyncio.gather(*tasks)

    for prompt, result in zip(prompts, results):
        print(f"Prompt: {prompt}\nResponse: {result}\n")

asyncio.run(main())
```

## Streaming Responses: Show Results as They Arrive

Why make users wait for the whole response? For long-form content generation, streaming responses can significantly improve the perceived performance of your application.

```python
import asyncio
from openai import AsyncOpenAI

async def stream_text(prompt, client):
    stream = await client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=True
    )

    full_response = ""
    async for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            content = chunk.choices[0].delta.content
            full_response += content
            print(content, end='', flush=True)

    print("\n")
    return full_response

async def main():
    prompt = "Write a short story about a time-traveling scientist."

    async with AsyncOpenAI() as client:
        result = await stream_text(prompt, client)

    print(f"Full response:\n{result}")

asyncio.run(main())
```

## Async with Langchain

Langchain supports async out of the box. Use async methods like `ainvoke` and `arun`. Add custom async callbacks for logging or monitoring.

```python
import asyncio
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.callbacks.manager import AsyncCallbackManager

class MyAsyncLogHandler(BaseCallbackHandler):
    async def on_llm_start(self, serialized, prompts, **kwargs):
        print(f"[{time.strftime('%H:%M:%S')}] --- LLM Started! Prompts: {prompts[:1]}...")

    async def on_llm_end(self, response, **kwargs):
        print(f"[{time.strftime('%H:%M:%S')}] --- LLM Ended!") 

async def generate_story(topic):
    llm = OpenAI(
        temperature=0.7, 
        streaming=True, 
        callback_manager=AsyncCallbackManager([MyAsyncLogHandler()])
    )
    prompt = PromptTemplate(
        input_variables=["topic"],
        template="Write a short story about {topic}."
    )
    chain = LLMChain(llm=llm, prompt=prompt)
    return await chain.arun(topic=topic)

async def main():
    topics = ["a magical forest", "a futuristic city", "an underwater civilization"]
    tasks = [generate_story(topic) for topic in topics]
    stories = await asyncio.gather(*tasks)
     
    for topic, story in zip(topics, stories):
        print(f"\nTopic: {topic}\nStory: {story}\n{'='*50}\n")

asyncio.run(main())
```

## TL;DR

Async programming is a game-changer for AI engineers dealing with LLM APIs and other tasks that spend a lot of time waiting on I/O. With Python's `asyncio`, you can fire off lots of API calls at once and keep things running much faster. Semaphores help you play nice with rate limits, and streaming responses make your apps feel snappier. Plus, async support in tools like Langchain means you can build async AI workflows easily.

## My Async Journey: Tips & Gotchas

- **Always use `await`** when calling async functions, or nothing will actually run concurrently!
- **Don't block the event loop** with heavy computations—offload those to threads or processes if needed.
- **Test with real APIs** mocking async APIs can be tricky, so I always try to test with the real thing before deploying.

## Further Reading

- [Asynchronous LLM API Calls in Python: A Comprehensive Guide](https://www.unite.ai/asynchronous-llm-api-calls-in-python-a-comprehensive-guide/)
