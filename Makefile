build:
	( cd client; npm run build; mv dist ../build )
	ln -s api build/api
