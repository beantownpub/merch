#!/bin/bash

aws-vault exec beantown:dev -- aws s3 sync ./public s3://beantown-static-files --delete
