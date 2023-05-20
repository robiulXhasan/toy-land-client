import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-20 space-y-5 ">
      <div className="border p-10 rounded shadow bg-pink-50 ">
        <h3 className="text-2xl font-semibold">
          What is an access token and refresh token? How do they work and where should we store them
          on the client-side?
        </h3>
        <p className="text-lg font-medium text-green-600">Answer:</p>
        <p>
          An access token and a refresh token are commonly used in authentication systems. Here's a
          detailed explanation of what they are, how they work, and where to store them on the
          client-side:
        </p>
        <p className="font-medium">Access Token:</p>
        <ul className="list-disc ms-8">
          <li>
            An access token is a credential that grants authorization to a client application to
            access protected resources on behalf of a user.
          </li>
          <li>It is short-lived and has an expiration time.</li>
          <li>
            The client includes the access token in each request to access protected resources.
          </li>
          <li>The server verifies the access token to ensure the client's authorization.</li>
        </ul>
        <p className="font-medium">Refresh Token:</p>
        <ul className="list-disc ms-8">
          <li>
            A refresh token is a credential that is used to obtain a new access token when the
            current one expires.
          </li>
          <li>It is long-lived and issued along with the access token during authentication.</li>
          <li>The client securely stores the refresh token</li>
          <li>
            When the access token expires, the client sends the refresh token to request a new
            access token.
          </li>
          <li>If the refresh token is valid, the server generates a new access token</li>
        </ul>
        <p className="font-medium">Storage on Client side:</p>
        <ul className="list-disc ms-8">
          <li>
            Access tokens should be stored securely, typically in memory or a short-lived storage
            like a session or cookie.
          </li>
          <li>Refresh tokens need to be stored securely and persistently.</li>
          <li>
            Secure storage mechanisms like browser storage (localStorage or sessionStorage) or
            platform-specific secure storage options are recommended.
          </li>
          <li>Encrypting the refresh token adds an extra layer of security.</li>
        </ul>
      </div>
      <div className="border p-10 rounded shadow bg-pink-50">
        <h3 className="text-2xl font-semibold">Compare SQL and NoSQL databases?</h3>
        <p className="text-lg font-medium text-green-600">Answer:</p>
        <p>
          SQL databases excel in structured data, complex relationships, and strict data
          consistency, while NoSQL databases are favored for scalability, performance, flexible data
          models, and eventual consistency. Comparison given in below:
        </p>
        <p className="font-medium">SQL Databases:</p>
        <ul className="list-disc ms-8">
          <li>Structured Query Language (SQL) databases are based on the relational model.</li>
          <li>They use tables with predefined schemas to store data in a structured manner.</li>
          <li>
            SQL databases ensure data integrity and enforce relationships between tables through
            foreign key constraints.
          </li>
          <li>
            They support complex queries and joins, making them suitable for applications with
            structured data and complex relationships.
          </li>
          <li>
            ACID (Atomicity, Consistency, Isolation, Durability) properties are guaranteed in SQL
            databases.
          </li>
          <li>Examples: MySQL, PostgreSQL, Oracle.</li>
        </ul>
        <p className="font-medium">NoSQL Databases:</p>
        <ul className="list-disc ms-8">
          <li>
            NoSQL (Not Only SQL) databases are designed to handle unstructured or semi-structured
            data.
          </li>
          <li>
            They use flexible data models like key-value pairs, documents, graphs, or column
            families.
          </li>
          <li>
            NoSQL databases offer high scalability and performance, making them suitable for
            large-scale distributed systems.
          </li>
          <li>
            They sacrifice some data consistency in favor of availability and partition tolerance
            (CAP theorem).
          </li>
          <li>
            NoSQL databases are schema-less, allowing for more agile development and easy
            scalability.
          </li>
          <li>Examples: MongoDB, Cassandra, Redis, Neo4j.</li>
        </ul>
      </div>
      <div className="border p-10 rounded shadow bg-pink-50">
        <h3 className="text-2xl font-semibold">What is express js? What is Nest JS ?</h3>
        <p className="text-lg font-medium text-green-600">Answer:</p>
        <p className="font-semibold">Express JS</p>
        <p className="ms-5">
          Express.js is a lightweight and minimalist framework for building web servers and APIs in
          Node.js.
        </p>
        <p className="font-semibold mt-3">Nest JS</p>
        <p className="ms-5">
          NestJS is a more feature-rich and opinionated framework that builds upon Express.js,
          offering a modular and scalable approach to server-side development with TypeScript.
        </p>
      </div>
      <div className="border p-10 rounded shadow bg-pink-50">
        <h3 className="text-2xl font-semibold">What is MongoDB aggregate and how does it work ?</h3>
        <p className="text-lg font-medium text-green-600">Answer:</p>

        <p>
          MongoDB's aggregate method allows for advanced data processing operations on a collection
          of documents.
        </p>
        <p className="mt-2">
          It works by providing a pipeline of stages that process the data sequentially. Each stage
          performs a specific operation on the input documents and passes the results to the next
          stage. Common stages include $match for filtering, $group for grouping and aggregation,
          and $sort for sorting. Aggregation operations and operators enable powerful data
          transformations and calculations. The aggregate method is flexible and enables complex
          data analysis and manipulation in MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
