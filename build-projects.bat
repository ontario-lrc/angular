@echo off

setlocal enabledelayedexpansion

rmdir /S /Q "%~dp0/dist"

for /D %%d in (projects\*) do (
    set "fullPath=%%d"
    set "libName=!fullPath:projects\=!"

    echo Building !libName!

    call npm run build !libName! --configuration=production

    if !errorlevel! neq 0 (
        echo Failed to build !libName!
        exit /b !errorlevel!
    )

	call cd "dist\!libName!"

	echo Setting up link for !libName!

	call npm link

	if !errorlevel! neq 0 (
        echo Failed to link !libName!
        exit /b !errorlevel!
    )

	call cd ..
	call cd ..

	echo.
)

endlocal

echo All projects built and linked successfully.