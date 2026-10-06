class NotFoundError(Exception):
    def __init__(self, detail: str = "Not found") -> None:
        self.detail = detail
        super().__init__(detail)


class RejectedError(Exception):
    def __init__(self, code: str, message: str) -> None:
        self.code = code
        self.message = message
        super().__init__(message)
