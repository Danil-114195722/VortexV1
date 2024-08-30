# prod/dev arg
mode=$1

if [ "$mode" == "prod" ]; then
  uvicorn main:app --host 0.0.0.0 --port 8080
else
  if [ "$mode" == "dev" ]; then
    uvicorn main:app --reload
  else
    echo 'Use "dev" arg to start app in DEVELOPMENT mode.'
    echo 'Or use "prod" arg to start app in PRODUCTION mode'
  fi
fi
