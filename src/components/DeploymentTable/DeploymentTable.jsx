import React from "react";
import Admonition from "@theme/Admonition";
import { PiWarningDiamondFill } from "react-icons/pi";
import CodeBlock from "@theme/CodeBlock";

const DeploymentTable = () => (
  <table style={{ fontSize: "14px" }}>
    <thead>
      <tr>
        <th style={{ verticalAlign: "center" }}></th>
        <th style={{ verticalAlign: "center" }}>
          <p>Docker deployment</p>
        </th>
        <th style={{ verticalAlign: "top" }}>
          <p>Kubernetes deployment</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ verticalAlign: "top" }}>
          <p>Platform</p>
        </td>
        <td style={{ verticalAlign: "top" }} colSpan="2">
          <p>The following options are suitable for both methods:</p>
          <ul style={{ marginTop: "0px" }}>
            <li>
              <a href="https://docs.aws.amazon.com/">
                Amazon Web Service (AWS)
              </a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/azure/?product=popular">
                Azure
              </a>
            </li>
            <li>
              <a href="https://cloud.google.com/docs">Google Cloud Platform</a>
            </li>
            <li>
              <a href="https://phoenixnap.com/bare-metal-cloud">
                Bare Metal Cloud
              </a>
            </li>
            <li>On-premises server</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td style={{ verticalAlign: "top" }}>General information</td>
        <td style={{ verticalAlign: "top" }}>
          <p>
            <b>
              <a href="https://docs.docker.com/compose/">Docker Compose</a>{" "}
              method:
            </b>
          </p>
          <p>
            This method is recommended unless you specifically want to use a
            Kubernetes cluster.
          </p>
          <p>
            If you haven't decided which platform or service to choose yet, we
            recommend that you try installing Datalore On-Premises on an AWS EC2
            instance. Refer to{" "}
            <a href="https://aws.amazon.com/getting-started/guides/deploy-webapp-ec2/">
              this guide
            </a>{" "}
            to learn how to create your own infrastructure in AWS.
          </p>
        </td>
        <td style={{ verticalAlign: "top" }}>
          <p>
            <b>
              <a href="https://helm.sh/docs/">Helm charts</a> method
            </b>
            :
          </p>
          <p>
            Besides creating and running a cluster directly on a virtual machine
            (e.g., EC2 instance), you can use dedicated Kubernetes services:
          </p>
          <ul>
            <li>
              <a href="https://aws.amazon.com/eks/">
                Elastic Kubernetes Service for AWS (EKS)
              </a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/azure/aks/">
                Azure Kubernetes Service
              </a>
            </li>
            <li>
              <a href="https://cloud.google.com/kubernetes-engine">
                Google Kubernetes Engine
              </a>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td style={{ verticalAlign: "top" }}>
          <p>Key differences</p>
        </td>
        <td style={{ verticalAlign: "top" }} colSpan="2">
          <ul>
            <li>
              Docker-based installation is <i>quicker and easier</i>: it is more
              suitable for a wider range of customers.
            </li>
            <li>
              Kubernetes deployment allows you to <i>use several machines</i> in
              your Datalore infrastructure and control your computational
              resources.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td style={{ verticalAlign: "top" }}>
          <p>Hardware requirements</p>
        </td>
        <td style={{ verticalAlign: "top" }} colSpan="2">
          <b>Datalore server</b>
          <ul>
            <li>
              <b>CPU</b>: minimum of <b>4 cores</b>
            </li>
            <li>
              <b>RAM</b>: minimum <b>4GB</b>, recommended <b>8GB</b> or higher
            </li>
          </ul>
          <p>
            <b>Computations</b>
          </p>
          <Admonition
            type="danger"
            title="Number of parallel agents"
            icon={<PiWarningDiamondFill />}
          >
            Your projected computations and number of agents working in parallel
            must be one of the main factors when calculating system requirements
            for your installation.
          </Admonition>
          <span>
            Different projects have different requirements, so here’s a
            simplified formula to estimate the needed RAM:
          </span>
          <CodeBlock language="plaintext">4 * (N + 1)</CodeBlock>
          <span>
            where <code>N</code> is the number of users, each working on one
            document. For instance, if you have 10 users, you would need at
            least 44 GB of RAM.
          </span>
        </td>
      </tr>
      <tr>
        <td style={{ verticalAlign: "top" }}>
          <p>System requirements</p>
        </td>
        <td style={{ verticalAlign: "top" }}>
          <ul>
            <li>Docker</li>
            <li>
              Docker Compose <code>v2.21.0</code> or higher
            </li>
            <li>
              PostgreSQL <code>15</code> database:
              <ul>
                <li>
                  <b>CPU</b>: <b>1 core minimum</b>, 2+ recommended
                </li>
                <li>
                  <b>RAM</b>: <b>4 GB minimum</b>, 8 GB recommended
                </li>
                <li>
                  <b>4 GB minimum</b> available for database, 6+GB recommended
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td style={{ verticalAlign: "top" }}>
          <ul>
            <li>
              k8s cluster (with minimum 1 machine available for scheduling the
              workload pods)
            </li>
            <li>kubectl on your machine pointed to this cluster</li>
            <li>Helm</li>
            <li>
              PostgreSQL <code>15</code> database:
              <ul>
                <li>
                  <b>CPU</b>: <b>1 core minimum</b>, 2+ recommended
                </li>
                <li>
                  <b>RAM</b>: <b>4 GB minimum</b>, 8 GB recommended
                </li>
                <li>
                  <b>4 GB minimum</b> available for database, 6+GB recommended
                </li>
              </ul>
            </li>
          </ul>
          <Admonition type="tip" title="" icon="">
            Current release of Datalore was tested with Kubernetes{" "}
            <code>v1.30</code> and Helm <code>v3.15.2</code>, but other versions
            may work too.
          </Admonition>
        </td>
      </tr>
    </tbody>
  </table>
);

export default DeploymentTable;
