import glob
import os

from setuptools import setup, find_packages

components = []
directories_jinja = glob.glob("wra_frontend/**/**/*.jinja", recursive=True)

for directory in directories_jinja:
    components.append(
        os.path.relpath(os.path.dirname(directory), "wra_frontend")
        + "/*.jinja"
    )

setup(
    name="wra-frontend",
    version="0.1.1",
    author="WRA team",
    description="Reusable frontend code for wra services and products",
    license="MIT",
    packages=find_packages(exclude=["tests"]),
    package_data={"wra-frontend": components},
    python_requires=">=3.5",
    install_requires=["validators"],
    include_package_data=True,
    extras_require={"testing": ["pytest", "flake8"]},
)
