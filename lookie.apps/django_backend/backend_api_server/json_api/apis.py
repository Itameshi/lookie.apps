from .models import Tasks
from rest_framework.generics import ListCreateAPIView    # API
from .serializers import APISerializer

class api(ListCreateAPIView):
    # 対象とするモデルのオブジェクトを定義
    queryset = Tasks.objects.all()

    # APIがデータを返すためのデータ変換ロジックを定義
    serializer_class = APISerializer

    # 認証
    permission_classes = []


def test():
    return 'a'
